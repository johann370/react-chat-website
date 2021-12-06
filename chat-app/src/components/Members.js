import Member from './Member'

const Members = ({ members }) => {
    return (
        <div className='members'>
            {
                members.map((member) => (
                    <Member username={member.username} />
                ))
            }
        </div>
    )
}

export default Members
