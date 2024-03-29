import { FC } from 'react';
import { Avatar, Box, Button, Grid } from '@mui/material';
import { Locale } from '../../core/locale';
import { Card } from '../Card';
import Link from 'next/link';

type AuthorCardProps = {
  avatarUrl?: string;
  authorName?: string;
  moreInfoLabel?: string;
  contactLabel?: string;
  description?: string;
  locale?: Locale;
};

export const AuthorCard: FC<AuthorCardProps> = ({
  avatarUrl,
  authorName,
  moreInfoLabel,
  contactLabel,
  description,
  locale,
}) => (
  <Card>
    <Box sx={{ padding: '1em 0' }}>
      <Grid container>
        <Grid item xs={2}>
          <Box sx={{ margin: '1em' }}>
            <a href="https://baraja.cz/kontakt" target="_blank">
              <Avatar
                src={avatarUrl ?? 'https://baraja.cz/content/jan-barasek.jpg'}
                alt={authorName ?? 'Jan Barášek'}
                sx={{ width: '100%', height: 'auto' }}
              />
            </a>
          </Box>
        </Grid>
        <Grid item xs={10} sx={{ paddingRight: '.5em' }}>
          <p style={{ margin: 0 }}>
            <b>{authorName ?? 'Jan Barášek'}</b>
            &nbsp;&nbsp;&nbsp;
            <Link href="/janbarasek" target="_blank">
              <Box component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                <span dangerouslySetInnerHTML={{ __html: moreInfoLabel ?? 'Více o autorovi' }} />
              </Box>
            </Link>
          </p>
          {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
          <Link href="https://baraja.cz/kontakt" target="_blank">
            <Button variant="contained" sx={{ marginRight: '.75em' }}>
              {contactLabel ?? 'Kontakt'}
            </Button>
          </Link>
          {locale === Locale.Cs && (
            <Link href="https://baraja.cz/kontakt" target="_blank">
              <Button variant="contained">Spolupráce</Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </Box>
  </Card>
);
