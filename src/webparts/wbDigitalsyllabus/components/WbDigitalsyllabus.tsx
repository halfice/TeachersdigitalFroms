import * as React from 'react';
import styles from './WbDigitalsyllabus.module.scss';
import { IWbDigitalsyllabusProps } from './IWbDigitalsyllabusProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';


export default class WbDigitalsyllabus extends React.Component<IWbDigitalsyllabusProps, {}> {
  
  
  _onChange(ev: React.MouseEvent<HTMLElement>, checked: boolean) {
    console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
  }
  
  public render(): React.ReactElement<IWbDigitalsyllabusProps> {
    const stackTokens: IStackTokens = { childrenGap: 10 };

    const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

    const _items: ICommandBarItemProps[] = [
      {
        key: 'newItem',
        text: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        iconProps: { iconName: 'Add' },
        subMenuProps: {
          items: [
            {
              key: 'emailMessage',
              text: 'Email message',
              iconProps: { iconName: 'Mail' },
              ['data-automation-id']: 'newEmailButton', // optional
            },
            {
              key: 'calendarEvent',
              text: 'Calendar event',
              iconProps: { iconName: 'Calendar' },
            },
          ],
        },
      },
      {
        key: 'upload',
        text: 'Upload',
        iconProps: { iconName: 'Upload' },
        href: 'https://developer.microsoft.com/en-us/fluentui',
      },
      {
        key: 'share',
        text: 'Share',
        iconProps: { iconName: 'Share' },
        onClick: () => console.log('Share'),
      },
      {
        key: 'download',
        text: 'Download',
        iconProps: { iconName: 'Download' },
        onClick: () => console.log('Download'),
      },
    ];
    
    const _overflowItems: ICommandBarItemProps[] = [
      { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
      { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
      { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
    ];
    
    const _farItems: ICommandBarItemProps[] = [
      {
        key: 'tile',
        text: 'Grid view',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Grid view',
        iconOnly: true,
        iconProps: { iconName: 'Tiles' },
        onClick: () => console.log('Tiles'),
      },
      {
        key: 'info',
        text: 'Info',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Info',
        iconOnly: true,
        iconProps: { iconName: 'Info' },
        onClick: () => console.log('Info'),
      },
    ];
    
    return (
      <div className={ styles.wbDigitalsyllabus }>
        <div className={ styles.container }>
          <div className={ styles.row }>
          

            <div className={ styles.column }>
             <h1>e-Digital Portal</h1>
            </div>


            <div className={ styles.column }>
            <Toggle label="Laguages" defaultChecked onText="English" offText="Arabic" onChange={this._onChange} >

</Toggle>
            </div>

            <div className={ styles.column }>
          <CommandBar
        items={_items}
        overflowItems={_overflowItems}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
      </div>
          </div>
        </div>
      </div>
    );
  }
}
