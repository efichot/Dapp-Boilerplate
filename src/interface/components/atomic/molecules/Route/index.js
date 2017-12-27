
import React from 'react'
import { Route } from 'react-router-dom'
import mergeProps from 'logic/interface/MergeProps';

export default ({ component, ...rest }) => {
    return (
        <Route {...rest} render={ routeProps => {
            return mergeProps(component, routeProps, rest);
        }}/>
    );
};