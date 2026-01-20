import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const availableLanguages = Object.keys(i18n.services.resourceStore.data);
    const currentLanguage = i18n.language.split('-')[0];

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
                {currentLanguage.toUpperCase()}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {availableLanguages.map((lang) => (
                    <MenuItem
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        selected={currentLanguage === lang}
                    >
                        {lang.toUpperCase()}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default LanguageSwitcher