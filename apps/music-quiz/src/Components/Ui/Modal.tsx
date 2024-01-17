// import React, { ReactNode, useEffect } from 'react';
// import cn from 'classnames';
// import { createPortal } from 'react-dom';
// import { ModalProps } from '../../Hooks/useModal';
// import Button, { ButtonStyle } from '../../../../../UI/src/lib/Components/buttons/Button';
// import { Text } from './Typography/Text';
// import { Icon } from './Icon/Icon';
//
// export type BaseModalProps = {
//     modal: ModalProps;
//     onCreateClick: () => void;
//     title: string;
//     classname?: string;
//     primaryDisabled?: boolean;
//     content: ReactNode;
// };
//
// export default function Modal(props: BaseModalProps) {
//     const { title, modal, onCreateClick, classname, primaryDisabled, content } = props;
//
//     useEffect(() => {
//         if (modal.isActive) {
//             document.onkeydown = (evt: KeyboardEvent) => {
//                 if ('key' in evt && (evt.key === 'Escape' || evt.key === 'Esc')) {
//                     modal.close();
//                 }
//             };
//         }
//     }, [modal.isActive]);
//
//     const className = cn(
//         'flex justify-center items-center w-full h-full fixed top-0 left-0',
//         modal.isActive ? 'opacity-100 visible' : ' opacity-0 hidden'
//     );
//
//     return createPortal(
//         <div style={{ zIndex: 20 }} className={className}>
//             <div className={`flex flex-col drop-shadow absolute w-[640px] max-h-[432px]`}>
//                 <div
//                     className={
//                         'flex w-full top-0 sticky rounded-t-xl items-center justify-between pl-6 p-4 bg-gray-50 border'
//                     }
//                 >
//                     <Text className={'w-full truncate'}>{title}</Text>
//                     <div className={'flex cursor-pointer p-2'} onClick={modal.close}>
//                         <Icon type={'cross'} />
//                     </div>
//                 </div>
//
//                 <div className={`p-6 bg-white truncate`}>{content}</div>
//
//                 <div
//                     className={
//                         'flex w-full bottom-0 sticky rounded-b-xl justify-end px-6 py-4 gap-2 bg-gray-50 border'
//                     }
//                 >
//                     <Button
//                         button_style={ButtonStyle.Primary}
//                         disabled={primaryDisabled}
//                         label={'Create'}
//                         onClick={onCreateClick}
//                     />
//                 </div>
//             </div>
//         </div>,
//         document.getElementById('modal')
//     );
// }
