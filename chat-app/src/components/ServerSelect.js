import Server from './Server'

const ServerSelect = ({ servers, selectedServer, setSelectedServer }) => {
    return (
        <select className='serverSelect' value={selectedServer} onChange={(e) => setSelectedServer(e.target.value)}>
            <option selected disabled>Please select a server</option>
            {
                servers.map((server) => (
                    <Server value={server.server_id} server={server.server.name} />
                ))
            }
        </select>
    )
}

export default ServerSelect
