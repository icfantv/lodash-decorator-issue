import * as React from 'react'
import { BindAll } from 'lodash-decorators'

export interface ITextButtonProps {
  onClick: () => void
}

@BindAll()
export class TextButton extends React.Component<ITextButtonProps> {
  public handleButtonClick(): void {
    this.props.onClick()
  }

  public render(): React.ReactElement<TextButton> {
    return <button onClick={this.handleButtonClick}>Click Me!</button>
  }
}
