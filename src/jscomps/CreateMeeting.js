import React, { useState } from 'react';
import { Context } from '../context/MyProvider';
import AgendaItem from './AgendaItem';
import ShowList from './ShowList';
import styled from 'styled-components';

import RoomViewComponent from '../components/RoomViewComponent';

/*
const Form = styled.div({
  height: '30rem',
  width: '90%',
  margin: '10rem auto',
  padding: '0.5rem',
});
*/

const CreateMeeting = props => {
  const { state, changeState } = React.useContext(Context);
  const [showForm, setShowForm] = useState(true);
  const [agenda, setAgenda] = useState(false);

  const handleAddAgenda = item => {
    let newList = [...state['meetingAgenda'], item];
    changeState('meetingAgenda', newList);
  };

  const handleDeleteAgenda = text => {
    let currentAgendas = state.meetingAgenda;
    let Delindex = -1;
    currentAgendas.map((item, index) => {
      if (item.item === text) {
        Delindex = index;
      }
    });
    if (Delindex > -1) {
      let newList = [...state.meetingAgenda];
      newList.splice(Delindex, 1);
      changeState('meetingAgenda', newList);
    }
  };

  return (
    <div className="">
      {showForm && (
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col border border-black-4 p-2 rounded flex-grow m-4">
            <input
              placeholder="Room Title"
              className="border border-black-4 p-2 rounded"
              type="text"
              name="roomName"
              onChange={e => changeState('roomName', e.target.value)}
            ></input>
            <br />

            <input
              placeholder="Meeting Title"
              className="border border-black-4 p-2 rounded"
              type="text"
              name="meetingTitle"
              onChange={e => changeState('meetingTitle', e.target.value)}
            ></input>
            <br />
            <div className="flex flex-col">
              <button
                className="bg-blue-600 p-2 rounded text-white hover:bg-blue-800"
                onClick={() => setAgenda(!agenda)}
              >
                {' '}
                Add Topic
              </button>
              {agenda && (
                <>
                  <AgendaItem handleAddAgenda={handleAddAgenda} />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col border border-black-4 p-2 rounded flex-grow m-4">
            <div  className="self-center underline" >Agenda List</div>
              {state.meetingAgenda && (

<<<<<<< HEAD
          <div className="flex flex-col border border-black-4 p-2 rounded">
            <div>Agenda List</div>
            {state.meetingAgenda && (
              <ShowList list={state.meetingAgenda} handleClickIcon={handleDeleteAgenda} />
            )}
            <button
              style={{ width: '50%' }}
              className="p-2 rounded text-white w-16 bg-green-600 hover:bg-green-800 self-center"
              onClick={props.handleCreateMeeting}
            >
              Create Meeting
            </button>
=======
                <ShowList list={state.meetingAgenda} handleClickIcon={handleDeleteAgenda} />
              )}

>>>>>>> dd31d4790caa0f56be2a315774510d1dfdd4e47a
          </div>
        </div>
      )}
<<<<<<< HEAD
    </div>
=======
      <div className="flex justify-evenly">
          <button
                  className="absolute top-50 right-50 p-2 rounded text-white bg-green-600 hover:bg-green-800"
                  onClick={props.handleCreateMeeting}
                  >
                  Create Meeting
          </button>
      </div>
    </Form>
>>>>>>> dd31d4790caa0f56be2a315774510d1dfdd4e47a
  );
};

export default CreateMeeting;
