 export default function SkillCard({ title, skills }) {
    return (<div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{title}</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                        {skill}
                    </span>
                    ))}
                </div>
            </div>);
 }
