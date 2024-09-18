# Tasks seed
projects = []
5.times do |i|
  projects << Project.create(title: "Ceci est le projet #{i}", content: 'lorem ipsum')
end


projects.each do |project|
  10.times do |i|
    Task.create(title: "Ceci est la tâche #{i}", content: "lorem ipsum", project: project)
  end
  
end 

  
