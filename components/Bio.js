const Socials = props => {

    const { media } = props;

    if (!media) return null;

    /*"facebook": "",
    "linkedin": "#",
    "pinterest": "#",
    "twitter": "#",
    "whatsapp": "#",
    "youtube": "#",
    "instagram": "#",
    "messenger": "#"*/
    // const { facebook, linkedin } = props;

    // const socials = []

    const socials = media.filter(social => social.link);

    return socials.map(social => <a href={social.link}><img className="member-bio-social-link" src={`/image/${social.platform}.png`} /></a>)
    
}

export const Bio = props => {

    const { currentMember } = props;

    console.log(currentMember);

    const MemberBio = props => {

        const { bio, dateOfBirth, lastOccupation, name, photos, placeOfBirth, socials } = props;

        const mainPic = photos && photos[0];

        return (
            <>
                <div className="member-bio--socials">
                    <div className="member-bio--pic-main member-bio--content-margin-bottom">
                        { mainPic && <img src={mainPic} /> }
                    </div>
                    <div className="member-bio--stats member-bio--content-margin-bottom">
                        <div className="member-bio--stats1 member-bio--content-bold"><span className="member-bio--content-label">Dislikes</span> Followers</div>
                    </div>
                    <div className="member-bio-links member-bio--content-margin-bottom"><Socials media={socials} /></div>
                </div>
                <div className="member-bio--profile">
                    <h2>{name}</h2>
                    <div className="member-bio--info">
                        <div className="member-bio--content-margin-bottom member-bio--content-bold"><span className="member-bio--content-label">Born</span> {dateOfBirth}</div>
                        <div className="member-bio--content-margin-bottom member-bio--content-bold"><span className="member-bio--content-label">Birth Place</span> {placeOfBirth}</div>
                        <div className="member-bio--content-margin-bottom member-bio--content-bold"><span className="member-bio--content-label">Occupation</span> {lastOccupation}</div>
                        <div className="member-bio--content-margin-bottom">{bio}</div>
                        <div className="member-bio--content-margin-bottom member-bio--content-pics">{ photos && photos.map(photo => <img className="member-bio--pic" src={photo} key={photo} />) }</div>
                    </div>
                </div>
            </>
        )
            
        
    }

    return (
        <div className="member-bio">
            {
                currentMember ?

                <MemberBio {...currentMember} /> :

                null
            }
        </div>
    )
}