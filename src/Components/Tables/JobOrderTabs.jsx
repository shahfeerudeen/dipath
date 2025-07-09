import React from 'react';
import { Box, Divider, IconButton } from '@mui/material';
import { ArrowForwardIosIcon, ArrowBackIosNewIcon } from '../Generals/Icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { tabs, VISIBLE_TABS } from '../../Utils/index';
import { tabVisibilityMap } from '../../Utils/tabVisibilityConfig';

const routeToTabId = {
  '/newjoborder': 'overview',
  '/generaljoborder': 'general',
};

export default function JobOrderTabs() {
  const [startIdx, setStartIdx] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [visibleTabIds, setVisibleTabIds] = React.useState(tabVisibilityMap['overview'] || []);
  const navigate = useNavigate();
  const location = useLocation();

  const canScrollLeft = startIdx > 0;
  const canScrollRight = startIdx + VISIBLE_TABS < tabs.length;

  const visibleTabs = tabs.slice(startIdx, startIdx + VISIBLE_TABS);

  React.useEffect(() => {
    const tabId = routeToTabId[location.pathname] || 'overview';
    setActiveTab(tabId);
    setVisibleTabIds(tabVisibilityMap[tabId] || []);
  }, [location.pathname]);

  const handleTabClick = (tabId) => {
    if (!visibleTabIds.includes(tabId)) return; // prevent click if not visible

    setActiveTab(tabId);
    setVisibleTabIds(tabVisibilityMap[tabId] || []);

    const clickedIndex = tabs.findIndex((tab) => tab.id === tabId);
    if (clickedIndex < startIdx) {
      setStartIdx(clickedIndex);
    } else if (clickedIndex >= startIdx + VISIBLE_TABS) {
      setStartIdx(clickedIndex - VISIBLE_TABS + 1);
    }

    const pathMap = {
      general: '/generaljoborder',
      overview: '/newjoborder',
    };

    if (pathMap[tabId]) {
      navigate(pathMap[tabId]);
    }
  };

  const handleScrollLeft = () => {
    if (canScrollLeft) setStartIdx((prev) => prev - 1);
  };

  const handleScrollRight = () => {
    if (canScrollRight) setStartIdx((prev) => prev + 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ececec',
        overflowX: 'hidden',
        whiteSpace: 'nowrap',
        justifyContent: 'space-between',
      }}
    >
      <IconButton
        size="small"
        sx={{
          ml: 0,
          mb: 1,
          visibility: canScrollLeft ? 'visible' : 'hidden',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
        }}
        onClick={handleScrollLeft}
        disabled={!canScrollLeft}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <Box sx={{ display: 'flex', gap: 2, flex: 1, overflow: 'hidden' }}>
        {visibleTabs.map((tab, idx) => {
          const isActive = activeTab === tab.id;
          const isVisible = visibleTabIds.includes(tab.id);

          return (
            <Box
              key={startIdx + idx}
              onClick={() => handleTabClick(tab.id)}
              sx={{
                mt: 1,
                pb: 1.5,
                minWidth: 80,
                textAlign: 'center',
                fontSize: 16,
                fontWeight: isActive ? 800 : isVisible ? 700 : 500,
                color: isActive
                  ? 'black'
                  : isVisible
                  ? 'rgba(87, 87, 87, 0.72)' // highlighted tabs
                  : 'rgba(124, 124, 124, 0.62)', // disabled tabs
                borderBottom: isActive ? '2px solid #222' : 'none',
                cursor: isVisible ? 'pointer' : 'not-allowed',
                opacity: isVisible ? 1 : 0.5,
                transition: 'all 0.2s ease',
                // '&:hover': {
                //   color: isVisible ? '#222' : '#ccc',
                //   opacity: isVisible ? 1 : 0.5,
                // },
              }}
            >
              {tab.label}
            </Box>
          );
        })}
      </Box>

      <Divider orientation="vertical" flexItem />
      <IconButton
        size="small"
        sx={{
          ml: 1,
          mb: 1,
          visibility: canScrollRight ? 'visible' : 'hidden',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
        }}
        onClick={handleScrollRight}
        disabled={!canScrollRight}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
