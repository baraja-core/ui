import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { HelpCenter } from '../HelpCenter';
import { styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const LoginHelpCenterDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': { padding: theme.spacing(2) },
  '& .MuiDialogActions-root': { padding: theme.spacing(1) },
}));

const LoginHelpCenterTitle: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <DialogTitle sx={{ padding: '.75em', paddingBottom: 0 }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '100%' }}>Help center</Box>
        <Box>
          {onClose && (
            <IconButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </DialogTitle>
  );
};

export const LoginHelpCenter: FC = () => {
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <>
      <Button variant="text" onClick={() => setHelpOpen(true)}>
        Need help?
      </Button>
      <LoginHelpCenterDialog onClose={() => setHelpOpen(false)} open={helpOpen} fullWidth>
        <LoginHelpCenterTitle onClose={() => setHelpOpen(false)} />
        <DialogContent dividers>
          <HelpCenter />
        </DialogContent>
      </LoginHelpCenterDialog>
    </>
  );
};
