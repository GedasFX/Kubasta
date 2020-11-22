import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useDialogService } from 'contexts/DialogServiceContext';
import React, { useEffect, useState } from 'react';
import { DialogData } from 'services/dialog.service';

export default function FeedbackContainer() {
  const dialogService = useDialogService();
  const [openDialogs, setOpenDialogs] = useState<DialogData[]>([]);

  useEffect(() => {
    const sub = dialogService?.subscribe((d) => {
      setOpenDialogs(d);
    });

    return () => {
      sub?.unsubscribe();
    };
  }, [dialogService]);
  return (
    <>
      {openDialogs.map((d, i) => (
        <Dialog open={true} key={i}>
          <DialogTitle>Use Google's location service?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary">Disagree</Button>
            <Button color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      ))}
    </>
  );
}
