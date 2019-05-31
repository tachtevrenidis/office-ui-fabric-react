import * as React from 'react';
import { Chiclet, ChicletSize } from '@uifabric/experiments';
import { createRef, DefaultButton, ITextField, Stack, Text, TextField } from 'office-ui-fabric-react';

export interface IChicletBasicExampleState {
  textFieldValue: string;
}

const TEST_URL = 'http://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/chiclet-test.html';

export class ChicletBasicExample extends React.Component<{}, IChicletBasicExampleState> {
  private _textField = createRef<ITextField>();

  constructor(props: {}) {
    super(props);

    this.state = {
      textFieldValue: TEST_URL
    };
  }

  public render(): JSX.Element {
    const { textFieldValue } = this.state;

    return (
      <Stack tokens={{ childrenGap: 16 }}>
        <Text>{'Try changing the url to see the chiclet with other metadata (eg. https://onedrive.com)'}</Text>
        <Stack horizontal tokens={{ childrenGap: 8 }}>
          <TextField componentRef={this._textField} styles={{ root: { width: '300px' } }} defaultValue="" />
          <DefaultButton text="Change url" onClick={this._onClickButton} />
        </Stack>
        <Chiclet url={textFieldValue} size={ChicletSize.medium} />
      </Stack>
    );
  }

  private _onClickButton = (): void => {
    if (this._textField && this._textField.current && this._textField.current.value) {
      this.setState({
        textFieldValue: this._textField.current.value
      });
    }
  };
}
