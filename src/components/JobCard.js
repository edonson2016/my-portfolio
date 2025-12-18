function createBorderColor(color) {
    return "border-" + color + "-600"
}

export default function JobCard({title, company_name, date, bullets, color = "rose"}) {
    var bcol = createBorderColor(color)

    return(
        <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 ${bcol}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800">{title}</h3>
                    <p className="text-blue-600 font-medium text-lg">{company_name}</p>
                  </div>
                  <p className="text-slate-600 mt-2 md:mt-0">{date}</p>
                </div>
                <ul className="space-y-2 text-slate-700">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {bullet}
                        </li>
                    ))
                    }
                </ul>
        </div>
    );
}