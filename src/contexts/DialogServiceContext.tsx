import React, { createContext, useContext } from 'react';
import DialogService from 'services/dialog.service';

const dialogServiceInstance = new DialogService();

export const DialogServiceContext = createContext<DialogService>(
  dialogServiceInstance
);

export const useDialogService = () => useContext(DialogServiceContext);

export function DialogServiceProvider(props: React.PropsWithChildren<{}>) {
  return (
    <DialogServiceContext.Provider value={dialogServiceInstance}>
      {props.children}
    </DialogServiceContext.Provider>
  );
}
