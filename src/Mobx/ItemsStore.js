import React from 'react';
import shortid from 'shortid';
import ToggleConnect from '../ROS/toggleConnect';
import {ROS} from '../ROS/ROS'
import EchoTopic from '../ROS/EchoTopic';
import { computed, observable } from 'mobx';

class ItemsStore {
  @observable items = [];
  @observable pendingRequests = 0;

  report() {
    if (this.items.length === 0)
      return "<none>";
  }

  @computed get currentLength(){
    return this.items.length
  }

  addItem() {
    this.items.push({
        id: shortid.generate(),
        ros: <ROS>
          <ToggleConnect/>
          <EchoTopic/>
        </ROS>
      }
    );
  }
}

const itemsStore = new ItemsStore();
export default itemsStore;