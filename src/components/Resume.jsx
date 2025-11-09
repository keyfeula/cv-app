import "../styles/Resume.css";

export function Resume({generalData, educationData, workData}) {

    return (
        <div className="resume">
            <section className="general">
                <h2>{generalData.userName}</h2>
                <span>{generalData.email} | </span>
                <span>{generalData.phone}</span>
            </section>
            <section className="education">
                <h2 className="educationHeading">Education</h2>
                <div className="schoolHeading">
                    <h3>{educationData.schoolName}</h3>
                    <h3>{educationData.graduationDate}</h3>
                </div>
                <div>{educationData.fieldOfStudy}</div>
            </section>
            <section className="experience">
                <h2 className="experienceHeading">Work Experience</h2>
                <div>{workData.companyName}</div>
                <div>{workData.title}</div>
                <div>{workData.responsibilities}</div>
                <div>{workData.startDate}</div>
                <div>{workData.endDate}</div>
            </section>
        </div>
    );
}