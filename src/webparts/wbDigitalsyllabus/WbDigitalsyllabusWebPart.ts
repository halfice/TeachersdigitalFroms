import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'WbDigitalsyllabusWebPartStrings';
import WbDigitalsyllabus from './components/WbDigitalsyllabus';
import { IWbDigitalsyllabusProps } from './components/IWbDigitalsyllabusProps';

export interface IWbDigitalsyllabusWebPartProps {
  description: string;
}

export default class WbDigitalsyllabusWebPart extends BaseClientSideWebPart <IWbDigitalsyllabusWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWbDigitalsyllabusProps> = React.createElement(
      WbDigitalsyllabus,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
