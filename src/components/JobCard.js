function createBorderColor(color) {
    return "border-" + color + "-600"
}

export default function JobCard({title, company_name, principal_inv = null, date, location, bullets, skills_used, color = "green"}) {
    //var bcol = createBorderColor(color)

    const borderColors = {
        green: "border-green-600"
    }

    const hasPrincipalInv =
    principal_inv !== null &&
    principal_inv !== undefined &&
    principal_inv !== "";

    return(
        <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 ${borderColors[color]}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <div className="flex items-center justify-start mx-auto gap-3 flex-wrap">
                        <h3 className="text-2xl font-semibold text-slate-800">{title}</h3>
                         {skills_used.map((skill_used) => (
                            <span key={skill_used} className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                                {skill_used}
                            </span>
                    ))}
                    </div>
                    <p className="text-green-600 font-medium text-lg">{company_name}</p>
                    {hasPrincipalInv && (<p className="text-black-600 font-medium text-base">Principal Investigator: {principal_inv}</p>)}
                  </div>
                  <div>
                    <p className="text-slate-600 mt-2 md:mt-0">{date}</p>
                    <p className="text-slate-600 mt-2 md:mt-0">{location}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-700">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {bullet}
                        </li>
                    ))
                    }
                </ul>
        </div>
    );
}