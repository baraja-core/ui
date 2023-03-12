import React, { useEffect } from 'react';
import { Box, MenuItem, TextField } from '@mui/material';
import { useLocalization } from '../../hook/useLocalization';
import { useCas } from '../../hook/useCas';
import { resolveLocaleFlag } from '../../core/locale/resolveLocaleFlag';
import { localeToLabel } from '../../core/locale/localeToLabel';

export const LoginHeader = () => {
  const { getLocale, getAvailableLocales, setLocale } = useLocalization();
  const { getOrganisations, getContextOrganisation, setOrganisation } = useCas();
  const organisation = getContextOrganisation()?.slug;

  useEffect(() => {
    if (!organisation) return;
    setOrganisation(organisation);
  }, [organisation]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <TextField select size="small" value={organisation ?? ''} onChange={(e) => setOrganisation(e.target.value)}>
          <MenuItem value={''}>Please select organisation</MenuItem>
          {getOrganisations().map((organisation) => (
            <MenuItem key={organisation.slug} value={organisation.slug}>
              {organisation.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ width: '30%', textAlign: 'right' }}>
        <TextField select size="small" value={getLocale()} onChange={(e) => setLocale(e.target.value)}>
          {getAvailableLocales().map((localeItem) => (
            <MenuItem key={localeItem} value={localeItem} sx={{ padding: '0 .5em', textAlign: 'center' }}>
              {resolveLocaleFlag(localeItem)} {localeToLabel(localeItem)}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};
