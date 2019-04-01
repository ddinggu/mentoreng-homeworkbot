import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

export default ({ moveHistoryPage, moveRegistPage }) => (
    <Segment clearing>
       <Button 
          floated='left' 
          icon='write' 
          content='과제등록' 
          color='twitter'
          onClick={moveRegistPage}
        />
      <Button 
        floated='right' 
        icon='file' 
        content="과제예약목록" 
        color='linkedin'
        onClick={moveHistoryPage}
      />
  </Segment>
);
