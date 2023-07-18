import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
  title: string;
  onAgree: () => void;
  titleAgreeButton: string;
}

export default function DialogApp(props: Props) {
  const { children, onClose, open, title, titleAgreeButton, onAgree } = props;

  return (
    <div>
      <BootstrapDialog
        fullWidth
        maxWidth="sm"
        onClose={onClose}
        aria-labelledby={title}
        open={open}
      >
        <BootstrapDialogTitle id={title} onClose={onClose}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant="contained"
            onClick={() => {
              onAgree();
              onClose();
            }}
          >
            {titleAgreeButton}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
