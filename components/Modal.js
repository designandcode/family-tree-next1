import Link from 'next/link'

export const Modal = (props) => {

	// const { controllerFunction, modal } = props;

	// const classNames = ['modal'];
	// if (modal?.open) {
	// 	classNames.push('modal-open')
	// }

	return (
		<div className="modal modal-open'">
			<div className="modal-close"><Link href="/">X</Link></div>
			{props.children}
		</div>
	)
}