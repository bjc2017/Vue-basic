const MyPlugin = {
	install(Vue, options) {
		Vue.component('heading', {
			props: ['level', 'title'],
			render(h) {
				let children = []
				const newNode = h('p', { class: 'aa', style: { color: 'green' } }, [
					h('span', { style: { color: 'red' } }, ['yyy'])
				])
				children.push(newNode)
				children.push(this.$slots.default)
				const vNode = h('h' + this.level, { attrs: { title: this.title, a: this.level } }, children)
				return vNode
			}
		})
	}
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(MyPlugin)
}
