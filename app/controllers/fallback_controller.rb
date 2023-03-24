class FallbackController < ActionController::Base
  def index
    render file: 'client/public/index.html'
  end
end