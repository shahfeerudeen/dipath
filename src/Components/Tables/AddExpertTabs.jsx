import React from 'react';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Addexpertstab as tabs } from '../../Utils/index';

const routeToTabId = {
  '/newjoborder': 'overview',
  '/generaljoborder': 'general',
};

export default function AddExpertTabs() {
  const [activeTab, setActiveTab] = React.useState('overview');
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const tabId = routeToTabId[location.pathname];
    if (tabId) setActiveTab(tabId);
  }, [location.pathname]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'general') {
      navigate('/generaljoborder');
    }
    if (tabId === 'overview') {
      navigate('/newjoborder');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ececec',
        width: '100%',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        gap: 2,
        px: 2,
      }}
    >
      {tabs.map((tab) => (
        <Box
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          sx={{
            mt: 1,
            pb: 1.5,
            borderBottom: activeTab === tab.id ? '2px solid #222' : 'none',
            color: activeTab === tab.id ? '#222' : '#6b6c6e',
            fontWeight: activeTab === tab.id ? 800 : 600,
            fontSize: 15,
            cursor: 'pointer',
            opacity: activeTab === tab.id ? 1 : 0.6,
            minWidth: 80,
            textAlign: 'center',
            transition: 'all 0.2s ease',
            '&:hover': {
              opacity: 0.8,
              color: '#222',
            },
          }}
        >
          {tab.label}
        </Box>
      ))}
    </Box>
  );
}
