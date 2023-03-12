import React, { FC, useState } from 'react';
import { Box, Button, CircularProgress, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCas } from '../../hook/useCas';
import { LoginEasterEgg } from './LoginEasterEgg';
import { LoginHelpCenter } from './LoginHelpCenter';
import { LoginHeader } from './LoginHeader';
import { Card } from '../../ui/Card';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

type LoginForm = { username: string; password: string; permanentLogin: boolean };

export const Login: FC = () => {
  const { getContextOrganisation } = useCas();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogging, setLogging] = useState(false);

  const organisation = getContextOrganisation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: { username: '', password: '', permanentLogin: false },
  });

  const [username, password] = [watch('username'), watch('password')];

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    setLogging(true);
    login(data.username, data.password, data.permanentLogin).then(() => setLogging(false));
  };

  const login = async (username: string, password: string, permanentLogin: boolean) => {
    // TODO
  };

  return (
    <Card
      title={<LoginHeader />}
      footer={
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '60%', paddingLeft: 2 }}>
            <FormControlLabel control={<Switch {...register('permanentLogin')} />} label="Stay signed in" />
          </Box>
          <Box sx={{ width: '40%', display: 'flex', justifyContent: 'right', paddingRight: 2 }}>
            <LoginHelpCenter />
          </Box>
        </Box>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ padding: 2 }}>
          {organisation?.description && <Box>{organisation.description}</Box>}
          <LoginEasterEgg username={username} />
          <FormGroup>
            <TextField
              {...register('username', { required: 'Username is required.' })}
              variant="outlined"
              label="Username"
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
              tabIndex={1}
              disabled={!Boolean(organisation)}
            />
          </FormGroup>
          <FormGroup sx={{ marginTop: 3 }}>
            <TextField
              {...register('password', { required: 'Password is required.' })}
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              label="Password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              tabIndex={2}
              disabled={!Boolean(organisation)}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </FormGroup>
          <Box sx={{ marginTop: 3, minHeight: '2.5em' }}>
            {isLogging ? (
              <CircularProgress size={3} />
            ) : (
              <Button
                type="submit"
                variant="contained"
                tabIndex={3}
                disabled={!username || !password || !Boolean(organisation)}
              >
                Login
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </Card>
  );
};
