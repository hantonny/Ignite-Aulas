import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

//https://api.github.com/users/hantonny/repos

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hantonny/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    useEffect(() => {
        fetch('https://api.github.com/users/hantonny')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios de <a href={users.blog} target="_blank">{users.name}</a></h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}

            </ul>
        </section>
    )
}