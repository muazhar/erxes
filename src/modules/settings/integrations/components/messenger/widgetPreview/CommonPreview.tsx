import { Messenger, MessengerPreview } from 'modules/engage/styles';
import { IUser } from 'modules/settings/channels/types';
import { LogoContainer } from 'modules/settings/styles';
import React, { Component } from 'react';
import WidgetPreview from './WidgetPreview';

type Props = {
  onChange: (key: any, value: string) => void,
  teamMembers: IUser[],
  color?: string,
  logoPreviewStyle?: any,
  welcomeMessage?: string,
  awayMessage?: string,
  wallpaper?: string,
  supporterIds?: string[],
  isOnline: boolean,
  logoPreviewUrl?: string
};

class CommonPreview extends Component<Props> {
  render() {
    const {
      logoPreviewStyle,
      logoPreviewUrl,
      color,
      wallpaper,
      welcomeMessage,
      awayMessage,
      isOnline,
      supporterIds,
      teamMembers
    } = this.props;

    return (
      <MessengerPreview>
        <Messenger>
          <WidgetPreview
            color={color}
            wallpaper={wallpaper}
            users={teamMembers}
            supporterIds={supporterIds}
            welcomeMessage={welcomeMessage}
            awayMessage={awayMessage}
            isOnline={isOnline}
          />

          <LogoContainer
            style={Object.assign(
              {
                backgroundColor: color,
                backgroundImage: `url(${logoPreviewUrl})`
              },
              logoPreviewStyle
            )}
          />
        </Messenger>
      </MessengerPreview>
    );
  }
}

export default CommonPreview;
