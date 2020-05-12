//pahoittelut jo etukäteen sekavasta setistä. Koodin siivoaminen ja jakaminen selkeämpiin komponentteihin sai
// jäädä, kun halusin päästä eteenpäin itse asiassa.

import React, { useState, useEffect } from "react";

import ListNames from "./ListNames";
import Filter from "./Filter";
import AddForm from "./AddForm";
import personService from "./services/Persons";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [notificationType, setType] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then((initPersons) => {
        setPersons(initPersons.data);
      })
      .catch((error) => {
        setType("error");
        setNotification("Error fetching data from server");
      });
  }, []);

  const handleRemove = (item) => {
    //palautetaan tyhjä, eli ei tehdä mitään, jos käyttäjä peruuttaa poiston
    if (!window.confirm(`Delete`)) {
      return "";
    }
    //poistetaan tietokannasta id:n perusteella henkilö.
    //päivittää staten filtteröimällä
    personService
      .remove(item.id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== item.id));
        setNotification(`${item.name} was deleted`);
        setTimeout(() => {
          setNotification(null);
        }, 4000);
      })
      .catch((error) => {
        setType("error");
        setNotification("Error deleting");
      });
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const Notification = ({ notification }) => {
    if (notification === null) {
      return null;
    }

    return <div className={notificationType}>{notification}</div>;
  };

  // uuden henkilön lisääminen
  const addNew = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    //uuden henkilön luonti, laittaa uuden henkilön tietokantaan ja päivittää staten
    //rikkooko hooksien sääntöjä? setPerson on if-lausekkeen takana...

    //puuttuu confirm.window -> voisi ajaa uuden apufunktion handleUpdate tms
    if (persons.map((x) => x.name).includes(newPerson.name)) {
      //melkoinen purkkaviritys selvittämään henkilön id, jos henkilön nimi on jo luettelossa
      const personId = persons.filter(
        (person) => person.name === newPerson.name
      )[0].id;
      personService
        .update(personId, newPerson)
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== personId ? person : updatedPerson
            )
          );
          setType("info");
          setNotification(`${newPerson.name} was updated`);

          setTimeout(() => {
            setNotification(null);
          }, 4000);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setType("error");
          setNotification("Error in updating phonebook");
        });
    } else {
      personService
        .create(newPerson)
        .then((addedPerson) => {
          setPersons(persons.concat(addedPerson));
          setType("info");
          setNotification(`${newPerson.name} was created`);
          setTimeout(() => {
            setNotification(null);
          }, 4000);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setType("error");
          setNotification("Could not create new person");
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter handleFilter={handleFilter} nameFilter={nameFilter} />

      <AddForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addNew={addNew}
        newName={newName}
        newNumber={newNumber}
      />

      <ListNames
        persons={persons}
        nameFilter={nameFilter}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default App;
