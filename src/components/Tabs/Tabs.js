import React from 'react';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import './Tabs.scss';

//Content for each tab
export const TabsItem = ({
  children,
  className,
  label,
  activeTab,
  ...attrs
}) => {

  const classes = clsx(
    "tabs-item",
    { className },
    { "tabs-item-active": label === activeTab }
  )

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  )
}

//Tab navigation (headings)
export const TabsNav = ({
  className,
  label,
  activeTab,
  onChangeActiveTab,
  ...attrs
}) => {

  const classes = clsx(
    "tabs-nav",
    { className },
    { "tabs-nav-active": label === activeTab }
  );

  const handleClick = (e) => {
    onChangeActiveTab(label);
  }

  return (
    <div className={classes} onClick={handleClick} {...attrs}>
      {label}
    </div>
  )
}

//Most parent component
export const Tabs = ({
  children,
  ...attrs
}) => {

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    setActiveTab(getTabsLabels(children)[0])
  }, [children]);

  const getTabsLabels = (children) => {
    return children.map(({ props }) => props.label)
  }

  const handleChangeTab = (label) => {
    setActiveTab(label);
  }

  const renderTabsNav = () => {
    return (
      getTabsLabels(children).map((label, i) => {
        return (
          <TabsNav
            label={label}
            key={i}
            activeTab={activeTab}
            onChangeActiveTab={handleChangeTab}
          />
        )
      })
    )
  }

  return (
    <div className="tabs-wrapper" {...attrs}>
      <div className="tabs-nav-wrapper">
        {renderTabsNav()}
      </div>
      <div className="tabs-body">
        {children.map((child, i) =>
          <div key={i}>
            {React.cloneElement(child, { activeTab })}
          </div>)}
      </div>
    </div>
  );
}