class CreateProfiles < ActiveRecord::Migration
  
  def self.up
    
    create_table :profiles ,:force=> true do |t|
      t.integer :id      ,:null => false
      t.integer :candidate_id , :null =>false
      t.string :lastname
      t.string :firstname
      t.text :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.string :phone_primary
      t.string :hours_per_week_available
      t.date :availability_date
      t.text :native_language
      t.text :additional_language_spoken
      t.text :additional_language_written
      t.text :alternate_email
      t.text :subject_expertise
      t.text :geographic_expertise
      t.text :cover_letter
      t.string :currency
      t.float :hourly_rate_expected_usd
      t.float :hourly_rate_expected
      t.datetime :hourly_rate_expected_updatedat
      t.string :job_type_sought
      t.integer :referrer_id
      t.string :otherreferrer
      t.timestamps
    end
    
    create_table :profiles_geographic_keywords ,:force=> true do |t|
    t.integer :profile_id ,:null =>false
    t.integer :geographic_keyword_id    
    end
    
    create_table :profile_subject_keywords ,:force => true do |t|
      t.integer :profile_id ,:null => false
      t.integer :subject_keyword_id
    end
    
    create_table :keywords ,:force => true do |t|
      t.integer :id ,:null => false
      t.text :type
      t.text :term
      t.integer :uses      
    end
    
    create_table :Resumes ,:force =>true do |t|
      t.integer :candidate_id , :null =>false
      t.text    :body
      t.text    :cover_letter
      t.timestamps      
    end
    
    create_table :Writing_samples , :force =>true do |t|
      t.integer :candidate_id , :null => false
      t.text    :url
      t.text    :body
      t.text    :SubjectArea
      t.text    :InputWritingSample
      t.text    :Comments
      t.text    :Privatecommentstextfield
      t.timestamps
    end
    
    
    create_table :Users , :force =>true do |t|
      t.string    :email, :null => false      
      t.string    :type
      t.string    :encrypted_password
      t.string    :persistence_token
      t.string    :perishable_token
      t.datetime  :last_request_at      
      t.integer   :nda_accepted
      t.datetime  :nda_at     
      t.datetime  :current_login_at
      t.datetime  :last_login_at
      t.string    :created_via
      t.integer   :created_by_user_id
      t.integer   :login_count
      t.timestamps
    end
    
    create_table :emails , :force => true do |t|
      t.string :state
      t.integer :tries
      t.datetime :sent_at
      t.integer :candidate_id
      t.string :recipient
      t.text :subject
      t.text :body
      t.timestamps
    end
    
   
    
    create_table :jobs ,:force =>true do |t|
    t.integer  :project_id
    t.string :slug
    t.integer :active
    t.string :title
    t.text :description
    t.date :date_from
    t.string :work_type
    t.date :date_to
    t.string :pay_rate
    t.text :notes
    t.string :internal_title
    t.string :pay_type
    t.string :work_type_details
    t.string :job_type
    t.timestamps
    end
    
    create_table :job_applications, :force =>true do |t|
      t.integer :candidate_id
      t.integer :job_id
      t.timestamps
    end
    
    create_table :projects , :force => true do |t|
      t.integer :project_manager_id
      t.string :slug
      t.integer :active
      t.string :name
      t.timestamps
    end
    
    create_table :settings , :force => true do |t|
      t.string :key
      t.text :instructions
      t.text :value
      t.timestamps        
    end
    
    create_table :referrers , :force => true do |t|
      t.integer :active
      t.integer :position
      t.string  :name
      t.string  :string
      t.timestamps  
    end
  
  create_table :Reviews ,:force => true do |t|
    t.integer :reviewable_id
    t.integer :score
    t.text :notes
    t.string :reviewable_type    
    t.timestamps
  end
  
  create_table :Prescreens ,:force => true do |t|
     t.string :type
     t.string :score
     t.text :initial_body
     t.text :ideal_body
     t.text :body
     t.integer :candidate_id    
     t.timestamps
   end
  
   create_table :Candidate_reviews ,:force => true do |t|
      t.integer :candidate_id
      t.string :strength
      t.string :work_type
      t.string :best_suited
      t.string :record_state
      t.text :notes
      t.integer :responsible_user_id
      t.integer :average_score
      t.integer :score
      t.integer :editor_for_native_language_only
      t.timestamps
    end
    
    create_table :Candidate_jobs , :force => true do |t|
      t.integer :candidate_id
      t.integer :job_id
    end
    
    create_table :Delayed_jobs ,:force => true do |t|
    t.integer  :priority
    t.integer :attempts
    t.text :handler
    t.text :last_error
    t.datetime :run_at
    t.datetime  :locked_at
    t.datetime  :failed_at
    t.string  :locked_by
    t.timestamps
    end
    
   end
  
    def self.down
      drop_table :profiles
      drop_table :profiles_geographic_keywords
      drop_table :profile_subject_keywords
      drop_table :keywords      
      drop_table :Resumes
      drop_table :Writing_samples
      drop_table :Users
      drop_table :emails
      drop_table :job_applications
      drop_table :jobs
      drop_table :projects
      drop_table :settings      
      drop_table :Referrers
      drop_table :Reviews
      drop_table :Prescreens
      drop_table :Candidate_reviews
      drop_table :Candidate_jobs
      drop_table :Delayed_jobs
    end
    
    
  end
    
    

  
 
    

