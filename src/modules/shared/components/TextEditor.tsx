import * as React from 'react'

import { Value } from 'slate'
import { Editor } from 'react-slate'

const initialValue = Value.fromJSON({
	// @ts-ignore
	document: {
		nodes: [
			{
				object: 'block',
				type: 'paragraph',
				nodes: [
					{
						object: 'text',
						leaves: [
							{
								text: 'My first paragraph'
							}
						]
					}
				]
			}
		]
	}
})

interface IProps {
	setFieldValue: any
}

class TextEditor extends React.Component<IProps> {
	state = {
		value: initialValue,
		editor: undefined
	}

	onKeyDown = () => {}

	ref = (editor: any) => {
		this.state.editor = editor
	}

	onChange = ({ value }: any) => {
		this.setState({ value })
		this.props.setFieldValue('body', value, false)
	}

	render() {
		return (
			<Editor
				// spellCheck
				ref={this.ref}
				onKeyDown={this.onKeyDown}
				value={this.state.value}
				onChange={this.onChange}
			/>
		)
	}
}

export default TextEditor
