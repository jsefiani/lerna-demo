import * as React from 'react';
import MuiModal, { DialogProps as MuiModalProps } from '@material-ui/core/Dialog';
import MuiModalHeader from '@material-ui/core/DialogTitle';
import MuiModalBody from '@material-ui/core/DialogContent';
import MuiModalFooter from '@material-ui/core/DialogActions';

export type ModalProps = MuiModalProps & {
	renderFooter?: (props: Pick<ModalProps, 'onClose'>) => JSX.Element;
};
export type UseModalProps = Pick<ModalProps, 'onClose' | 'open'>;

export const useModal = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);
	const onToggle = () => setIsOpen(!isOpen);

	return {
		isOpen,
		onClose,
		onOpen,
		onToggle,
	};
};

// TODO: Add close button
export const Modal = ({ title, children, renderFooter, onClose, fullWidth = true, ...props }: ModalProps) => {
	return (
		<MuiModal {...props} onClose={onClose} fullWidth={fullWidth}>
			{title && <MuiModalHeader>{title}</MuiModalHeader>}
			<MuiModalBody>{children}</MuiModalBody>
			<MuiModalFooter>{renderFooter && renderFooter({ onClose })}</MuiModalFooter>
		</MuiModal>
	);
};
