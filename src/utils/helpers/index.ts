export function themeHelper(theme: any) {
	let css = document.getElementById('my-styles')
	if (theme === 'dark') {
		if (css !== null) {
			css.removeChild(css.childNodes[0])

			const styles = `html, body {
                background-color: #302f2f;
                height: 100%;
            }`

			css.append(document.createTextNode(styles))
		} else {
			let css = document.createElement('style')
			css.id = 'my-styles'
			const styles = `html, body {
                background-color: #302f2f;
                height: 100%;
            }`

			css.append(document.createTextNode(styles))
			document.head.append(css)
		}
	} else {
		if (css !== null) {
			css.removeChild(css.childNodes[0])

			const styles = `html, body {
                background-color: #e2dcdc;
                height: 100%;
            }`

			css.append(document.createTextNode(styles))
		} else {
			let css = document.createElement('style')
			css.id = 'my-styles'
			const styles = `html, body {
                background-color: #e2dcdc;
                height: 100%;
            }`

			css.append(document.createTextNode(styles))
			document.head.append(css)
		}
	}
}
