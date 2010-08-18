def run_specs
  system('clear')
  path = "spec/modules/jasmine-node/lib:spec/javascripts:public/javascripts"
  system("env NODE_PATH=#{path} node spec/modules/jasmine-node/specs.js")
end

watch('^(public/javascripts/(.*)\.js)') { |m| run_specs }
watch('^(spec/javascripts/(.*)\.js)') { |m| run_specs }

run_specs

# vim:ft=ruby
