class Candidate < ActiveRecord::Base
  set_table_name "users"
  
  def self.userexists!(email)

    @flag = Candidate.exists?(:email => email)
   
  end
  
  def self.getCandidateinfo(email)
  @candidate = Candidate.find_by_email(email)
  end
  
  def self.updateCandidatepasswd(email)
  
  end
  
end
