class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
    before_action :authenticate_user!
     before_action :configure_permitted_parameters, if: :devise_controller?


  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])

  end




module ChatSpace
  class Application < Rails::Application
    config.i18n.default_locale = :ja
  end
end

end
