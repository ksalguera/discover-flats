# Parameter wrapping for JSON
ActiveSupport.on_load(:action_controller) do
  wrap_parameters format: []
end