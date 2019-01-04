import * as React from 'react'

import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import classNames from 'classnames'

export const DropDownContainer = styled.div`
	@media (min-width: 780px) {
		display: flex;
		flex: 1;
		grid-gap: 1rem;
	}
`

export const DropdownStyle = styled.div`
	@media (min-width: 780px) {
		border: 1px dotted black;
		width: 200px;
		height: 200px;
	}
`

export const DropInput = styled.input`
	@media (min-width: 780px) {
		border: 1px solid black;
		width: 50%;
	}
`

interface IProps {
	onDrop: any
}

export const FileUpload: React.FunctionComponent<IProps> = ({ onDrop }): JSX.Element => (
	<Dropzone onDrop={onDrop}>
		{({ getRootProps, getInputProps, isDragActive }) => {
			return (
				<DropDownContainer>
					<DropdownStyle
						{...getRootProps()}
						className={classNames('dropzone', {
							'dropzone--isActive': isDragActive
						})}
					>
						<DropInput {...getInputProps()} />
						{isDragActive ? (
							<p>Drop files here...</p>
						) : (
							<p>Try dropping some files here, or click to select files to upload.</p>
						)}
					</DropdownStyle>
				</DropDownContainer>
			)
		}}
	</Dropzone>
)
