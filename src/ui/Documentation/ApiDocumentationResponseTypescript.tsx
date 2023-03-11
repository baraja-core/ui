import { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type ApiDocumentationResponseTypescriptProps = {
  definition: string;
};

export const ApiDocumentationResponseTypescript: FC<ApiDocumentationResponseTypescriptProps> = ({ definition }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} size="small" variant="outlined" sx={{ padding: '0' }}>
        TS
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Endpoint response Typescript definition
          <IconButton aria-label="close" onClick={() => setOpen(false)} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText tabIndex={-1}>
            <pre style={{ fontFamily: 'monospace' }}>{definition}</pre>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
