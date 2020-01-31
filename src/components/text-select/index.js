/**
* Copyright (C) 2016-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import CreatableSelect from 'react-select/creatable';
import { components } from 'react-select';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import contains from '@stdlib/assert/contains';
import './text_select.css';


// VARIABLES //

const customStyles = {
	clearIndicator: ( provided, state ) => ({
		...provided,
		cursor: 'pointer'
	}),
	multiValueRemove: ( provided, state ) => ({
		...provided,
		cursor: 'pointer'
	}),
	valueContainer: ( provided, state ) => ({
		...provided,
		cursor: 'text'
	})
};

const customComponents = {
	DropdownIndicator: null,
	MultiValueLabel: props => {
		const copyToClipboard = () => {
			copy( props.data.label );
		};
		return (
			<OverlayTrigger
				overlay={<Tooltip id="copy_tooltip">Click to copy to clipboard</Tooltip>}
				placement="bottom"
			>
				<span
					role="button" tabIndex={0}
					onClick={copyToClipboard} onKeyPress={copyToClipboard}
					className="text-select-copy"
				>
					<components.MultiValueLabel {...props} />
				</span>
			</OverlayTrigger>
		);
	}
};


// FUNCTIONS //

const createOption = ( label ) => ({
	label,
	value: label
});


// MAIN //

class TextSelect extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			inputValue: '',
			value: props.defaultValue.map( createOption )
		};
	}

	handleChange = ( value ) => {
		this.setState({ value });
		this.props.onChange( value );
	}

	handleInputChange = ( inputValue, action ) => {
		if ( action.action !== 'input-blur' && action.action !== 'menu-close' ) {
			this.setState({
				inputValue
			});
		}
	}

	handleKeyDown = ( event ) => {
		let { inputValue, value } = this.state;
		if ( !inputValue ) {
			return;
		}
		switch ( event.key ) {
			case 'Enter':
			case 'Tab': {
				if ( contains( inputValue, ',' ) ) {
					inputValue = inputValue.split( ',' );
				} else {
					inputValue = [ inputValue ];
				}
				let newValue;
				if ( value ) {
					newValue = value.concat( inputValue.map( createOption ) );
				} else {
					newValue = inputValue.map( createOption );
				}
				this.setState({
					inputValue: '',
					value: newValue
				}, () => {
					this.props.onChange( this.state.value );
				});
				event.preventDefault();
			}
		}
	}

	render() {
		const { inputValue, value } = this.state;
		const isInvalid = this.props.isInvalid;
		const control = ( provided, state ) => {
			const out = {
				...provided
			};
			if ( state.isFocused && isInvalid ) {
				out.boxShadow = '0 0 0 0.2rem rgba(220,53,69,0.25)';
			}
			out.borderColor = isInvalid ? '#dc3545' : '#ddd';
			out[ '&:hover' ] = {
				borderColor: isInvalid ? '#dc3545' : '#ddd'
			};
			return out;
		};
		return (
			<CreatableSelect
				components={customComponents}
				inputValue={inputValue}
				isClearable={this.props.isClearable}
				isMulti
				menuIsOpen={false}
				onChange={this.handleChange}
				onInputChange={this.handleInputChange}
				onKeyDown={this.handleKeyDown}
				placeholder="Enter email addresses..."
				value={value}
				styles={{ ...customStyles, control: control, ...this.props.styles }}
			/>
		);
	}
}


// PROPERTIES //

TextSelect.propTypes = {
	defaultValue: PropTypes.array,
	isClearable: PropTypes.bool,
	isInvalid: PropTypes.bool,
	onChange: PropTypes.func,
	styles: PropTypes.object
};

TextSelect.defaultProps = {
	defaultValue: [],
	isClearable: false,
	isInvalid: false,
	onChange() {},
	styles: {}
};


// EXPORTS //

export default TextSelect;
