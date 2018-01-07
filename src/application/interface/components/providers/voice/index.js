/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
import annyang from 'annyang'

/* ------------------------- Internal Dependencies -------------------------- */
import { 
  // Aside
  themeLayoutDashboardAsideOn,
  themeLayoutDashboardAsideOff,
  themeLayoutDashboardAsideToggle,
  themeLayoutDashboardAsideSmall,
  themeLayoutDashboardAsideNormal,
  themeLayoutDashboardAsideLarge,
  // Footer
  themeLayoutDashboardFooterOn,
  themeLayoutDashboardFooterOff,
  themeLayoutDashboardFooterToggle,
  themeLayoutDashboardFooterSmall,
  themeLayoutDashboardFooterNormal,
  themeLayoutDashboardFooterLarge,  
  // Header
  themeLayoutDashboardHeaderOn,
  themeLayoutDashboardHeaderOff,
  themeLayoutDashboardHeaderToggle,
  themeLayoutDashboardHeaderSmall,
  themeLayoutDashboardHeaderNormal,
  themeLayoutDashboardHeaderLarge,
  
  themeLayoutPanelsOn,
  themeLayoutPanelsOff,
  themeLayoutPanelsToggle,
  themeLayoutPanelLeftToggle,
  themeLayoutPanelRightToggle,

} from 'appStore/departments/actions'

import { history } from 'appStore/configuration';

/* ---------------------------- Module Package ------------------------------ */
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    const self = this 
    annyang.addCommands({

        /*---*--- Routing ---*---*/
        'new *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('deal' || 'deals'):
                history.push('/dashboard/deal/create')
                break;
            }
        },
        /*---*--- Routing ---*---*/
        'view *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('home'):
                history.push('/dashboard')
                break;
              case('deals'):
                history.push('/dashboard/deals')
                break;
              case('health'):
                history.push('/dashboard/health')
                break;
              case('predictions'):
                history.push('/dashboard/predictions')
                break;
              case('messages'):
                history.push('/dashboard/messages')
                break;
              case('people'):
                history.push('/dashboard/people')
                break;
              case('schedule'):
                history.push('/dashboard/settings')
                break;
              case('settings'):
                history.push('/dashboard/settings')
                break;
            }
        },
        /*---*--- Dashboard ---*---*/
        'dashboard *command': eventVoice=>{
            switch (eventVoice.toLowerCase()) {
              case('focus'):
                self.props.headerOff()
                self.props.asideOff()
                break;
              case('full'):
                self.props.headerOn()
                self.props.asideOn()
                break;
              case('small'):
                self.props.headerSmall()
                self.props.asideSmall()
                break;
              case('large'):
                self.props.headerNormal()
                self.props.asideNormal()
                break;

              /*---* Aside : Theme *---*/
              case('aside on'):
                self.props.headerOn()
                break;
              case('aside off'):
                self.props.asideOff()
                break;
              case('aside small'):
                self.props.asideSmall()
                break;
              case('aside normal'):
                self.props.asideNormal()
                break;
              case('aside large'):
                self.props.asideLarge()
                break;
              /*---* Header : Theme *---*/
              case('header on'):
                self.props.headerOn()
                break;
              case('header off'):
                self.props.headerOff()
                break;
              case('header small'):
                self.props.headerSmall()
                break;
              case('header normal'):
                self.props.headerNormal()
                break;
              case('header large'):
                self.props.headerLarge()
                break;
            }
        },
        /*---*--- Aside : Zone ---*---*/
        'aside *command': eventVoice=>{
            switch (eventVoice.toLowerCase()) {
              /*---* Aside : Theme *---*/
              case('on'):
                self.props.asideOn()
                break;
              case('off'):
                self.props.asideOff()
                break;
              case('small'):
                self.props.asideSmall()
                break;
              case('normal'):
                self.props.asideNormal()
                break;
              case('large'):
                self.props.asideLarge()
                break;
            }
        },
        /*---*--- Footer : Zone ---*---*/
        'footer *command': eventVoice=>{
            switch (eventVoice.toLowerCase()) {
              /*---* Aside : Theme *---*/
              case('on'):
                self.props.footerOn()
                break;
              case('off'):
                self.props.footerOff()
                break;
              case('small'):
                self.props.footerSmall()
                break;
              case('normal'):
                self.props.footerNormal()
                break;
              case('large'):
                self.props.footerLarge()
                break;
            }
        },

          /*---*--- Dashboard ---*---*/
          'panel *command': eventVoice=>{
            switch (eventVoice.toLowerCase()) {
              case('on'):
                self.props.panelsOn()
                break;
              case('off'):
                self.props.panelsOff()
                break;
              case('toggle'):
                self.props.panelsToggle()
                break;
              case('left toggle'):
                self.props.panelLeftToggle()
                break;
              case('right toggle'):
                self.props.panelRightToggle()
                break;
            }
        }
    });

    /*---*--- SpeechKITT ---*---*/
    // TODO : Properly implement SpeechKITT... @kamescg was lazy and ploppped the CDN js file in the HTML file - Boooo!

    if(window.SpeechKITT) {
      // Tell KITT to use annyang 
      window.SpeechKITT.annyang();
    
      // Define a stylesheet for KITT to use 
      window.SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');
    
      // Render KITT's interface 
      window.SpeechKITT.vroom();
      }
    }
  }
)

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> ({

})

const mapDispatchToProps = (dispatch, props) => ({
  asideOn: () => dispatch(themeLayoutDashboardAsideOn()),
  asideOff: () => dispatch(themeLayoutDashboardAsideOff()),
  asideToggle: () => dispatch(themeLayoutDashboardAsideToggle()),
  asideSmall: () => dispatch(themeLayoutDashboardAsideSmall()),
  asideNormal: () => dispatch(themeLayoutDashboardAsideNormal()),
  asideLarge: () => dispatch(themeLayoutDashboardAsideLarge()),

  footerOn: () => dispatch(themeLayoutDashboardFooterOn()),
  footerOff: () => dispatch(themeLayoutDashboardFooterOff()),
  footerToggle: () => dispatch(themeLayoutDashboardFooterToggle()),
  footerSmall: () => dispatch(themeLayoutDashboardFooterSmall()),
  footerNormal: () => dispatch(themeLayoutDashboardFooterNormal()),
  footerLarge: () => dispatch(themeLayoutDashboardFooterLarge()),
  
  headerOn: () => dispatch(themeLayoutDashboardHeaderOn()),
  headerOff: () => dispatch(themeLayoutDashboardHeaderOff()),
  headerToggle: () => dispatch(themeLayoutDashboardHeaderToggle()),
  headerSmall: () => dispatch(themeLayoutDashboardHeaderSmall()),
  headerNormal: () => dispatch(themeLayoutDashboardHeaderNormal()),
  headerLarge: () => dispatch(themeLayoutDashboardHeaderLarge()),
  

  panelsOn: () => dispatch(themeLayoutPanelsOn()),
  panelsOff: () => dispatch(themeLayoutPanelsOff()),
  panelsToggle: () => dispatch(themeLayoutPanelsToggle()),
  panelLeftToggle: () => dispatch(themeLayoutPanelLeftToggle()),
  panelRightToggle: () => dispatch(themeLayoutPanelRightToggle()),
  
})

const Empty = props => props.children
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(Empty);
