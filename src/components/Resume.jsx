import "../styles/Resume.css";

export function Resume({generalData, educationData, workData}) {

    return (
        <div className="resume">
            <section className="general">
                <h2>{generalData.userName ?? "John Doe"}</h2>
                <span>{generalData.email ?? "jdoe@gmail.com"} | </span>
                <span>{generalData.phone ?? "602-200-3200"}</span>
            </section>
            <section className="education">
                <h2 className="educationHeading">Education</h2>
                <div className="schoolHeading">
                    <h3>{educationData.schoolName ?? "Stanford University"}</h3>
                    <h3>{educationData.graduationDate ?? "8/08/2022"}</h3>
                </div>
                <div>{educationData.fieldOfStudy ?? "Computer Science"}</div>
            </section>
            <section className="experience">
                <h2 className="experienceHeading">Work Experience</h2>
                <div className="firstRow">
                    <h3>{workData.companyName ?? "Intel"}</h3>
                    <div className="dateInfo">
                        <h3>{workData.startDate ?? "10/16/2022"}</h3>
                        <h2>-</h2>
                        <h3>{workData.endDate ?? "11/06/2025"}</h3>
                    </div>
                </div>
                <div>{workData.title ?? "Software Engineer"}</div>
                <div>{workData.responsibilities ?? `Writing software for Intel products 
                with a team of engineers`}</div>
            </section>
        </div>
    );
}