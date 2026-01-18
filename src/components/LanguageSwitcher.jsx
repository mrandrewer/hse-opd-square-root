import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        handleClose();
    };

    return (
        <>
            <Button
                startIcon={<LanguageIcon />}
                onClick={handleClick}
                color="inherit"
            >
                {i18n.language}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                <MenuItem onClick={() => changeLanguage('ru')}>Русский</MenuItem>
            </Menu>
        </>
    );
};

export default LanguageSwitcher