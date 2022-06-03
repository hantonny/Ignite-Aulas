import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

//https://api.github.com/users/hantonny/repos

interface Repository {
    name: string,
    description: string,
    html_url: string,
}

interface Users {
    name: string,
    blog: string,
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [users, setUsers] = useState<Users>({name: '', blog: ''})

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