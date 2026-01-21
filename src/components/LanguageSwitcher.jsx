import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [langList, setLangList] = useState([]);

    const currentLanguage = i18n.language.split('-')[0];

    const handleClick = async (event) => {
        const buttonElement = event.currentTarget;
        try {
            const response = await fetch('/lang_list.json');
            const data = await response.json();
            setLangList(data)
        } catch (error) {
            console.error('Error fetching data:', error);
            console.error('Default to loaded languages:', error);
            const availableLanguages = Object.keys(i18n.services.resourceStore.data);
            setLangList(availableLanguages)
        }
        setAnchorEl(buttonElement);
    }
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
                {langList.map((lang) => (
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