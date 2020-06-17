import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Member from "./Member";
import { IMember } from "./common/types";

function App() {
    const [teamMembers, setTeamMembers] = useState<IMember[]>([]);
    const [memberToEdit, setMemberToEdit] = useState<IMember | boolean>(false);
    const [formDescription, setFormDescription] = useState(
        "Add member to team:"
    );

    const editMember = (member: IMember, editedMember: IMember) => {
        setTeamMembers(
            teamMembers.map((obj) => {
                return JSON.stringify(obj) === JSON.stringify(member)
                    ? editedMember
                    : obj;
            })
        );
        setMemberToEdit(false);
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Team Builder</h1>
                <h2>{formDescription}</h2>
                <Form
                    addTeamMember={(member: IMember) =>
                        setTeamMembers([...teamMembers, member])
                    }
                    memberToEdit={memberToEdit}
                    editMember={editMember}
                    update={(description: string) =>
                        setFormDescription(description)
                    }
                />
                <div className='movie-list'>
                    {teamMembers.map((member: IMember) => (
                        <Member
                            key={member.name}
                            member={member}
                            setMemberToEdit={setMemberToEdit}
                            update={(description: string) =>
                                setFormDescription(description)
                            }
                        />
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;