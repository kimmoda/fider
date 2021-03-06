import * as React from 'react';
import { User, IdeaResponse, IdeaStatus } from '@fider/models';
import { Gravatar, MultiLineText, Moment } from '@fider/components/common';

interface IdeaResponseProps {
  status: number;
  response: IdeaResponse;
}

export const ShowIdeaResponse = (props: IdeaResponseProps): JSX.Element => {
    const status = IdeaStatus.Get(props.status);

    if (props.response && status.show) {
        return <div className="fdr-response item ui raised segment">
                <span className={`ui ribbon label ${status.color}`}>{ status.title }</span>
                    <div className="info">
                        <Gravatar hash={props.response.user.gravatar}/> <u>{props.response.user.name}</u>
                        <Moment date={props.response.respondedOn} />
                    </div>
                    <div className="content">
                        <MultiLineText text={ props.response.text } markdown={true} />
                    </div>
                </div>;
    }
    return <div/>;
};
