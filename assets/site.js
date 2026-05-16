(function () {
  const storageKey = "greyAreaCommonsDrafts";
  const visibilityOptions = [
    ["public", "Public"],
    ["trusted_only", "Trusted-only"],
    ["match_only", "Match-only"],
    ["private", "Private"],
    ["never_publish", "Never publish"]
  ];

  const builders = {
    basicAura: {
      title: "Ease In",
      schema: "grey_area_commons.basic_aura_profile.v0",
      filename: "basic-aura-profile.md",
      intro: "A gentle first room for lowering pressure. Name only the pieces of yourself that feel easy enough to carry into a loving connection conversation.",
      sections: [
        {
          title: "Arriving Softly",
          fields: [
            {
              type: "singleCheck",
              name: "adult_confirmed",
              label: "I confirm I am an adult and this draft is for lawful, consent-led connection only.",
              markdownLabel: "Adult-only confirmation"
            },
            { type: "text", name: "display_name", label: "What name feels comfortable here?", hint: "Use a real name, nickname, handle, or temporary name. The point is ease, not exposure." },
            { type: "text", name: "place_band", label: "Where are you connecting from or toward?", hint: "Local, nearby, online-first, travelling, further away, returning home, or not sure." },
            {
              type: "select",
              name: "default_visibility",
              label: "What pace would make this feel less anxious?",
              hint: "Choose the pace that protects your nervous system.",
              options: [
                ["slow_and_gentle", "Slow and gentle"],
                ["friendly_first", "Friendly first"],
                ["clear_but_warm", "Clear but warm"],
                ["playful_with_boundaries", "Playful with boundaries"],
                ["not_sure_yet", "Not sure yet"]
              ]
            },
            { type: "textarea", name: "public_signal", label: "What would help you feel safe enough to begin?", hint: "A kind first message, no pressure to reply, shared humour, clear intentions, a public setting, a trusted intro, time to think, or something else." }
          ]
        },
        {
          title: "Warmth and Recognition",
          fields: [
            { type: "textarea", name: "similar_humanity", label: "What parts of shared humanity make you soften?", hint: "Kindness, curiosity, music, humour, grief, faith, play, care, making things, learning, resilience, sensuality, service, quietness, courage." },
            { type: "textarea", name: "diversity_welcome", label: "What kinds of difference could feel beautiful, not frightening?", hint: "Distance, culture, language, age within legal adult limits, neurotype, body, gender, sexuality, spirituality, class, ability, relationship shape, or life path." },
            { type: "textarea", name: "abundance_values", label: "What does joyful responsible abundance feel like in intimacy?", hint: "More time, more honesty, more kindness, more play, more care, more patience, more mutual thriving, more room to be real." }
          ]
        },
        {
          title: "Soft Edges",
          fields: [
            { type: "textarea", name: "private_edges", label: "What is not ready to be touched yet?", hint: "History, vulnerability, attraction, identity, health, family, money, exact location, body, grief, trauma, private longing, or anything that needs time." },
            { type: "textarea", name: "open_questions", label: "What would a kind person ask before going deeper?", hint: "Write questions that would make you breathe easier, not freeze up." }
          ]
        }
      ]
    },
    permissions: {
      title: "Sharing Layers",
      schema: "grey_area_commons.permissions.v0",
      filename: "self-managed-permissions.md",
      intro: "A softer sharing map. The aim is not to hide everything; it is to let closeness grow without anyone feeling overexposed.",
      sections: [
        {
          title: "Comfort Layers",
          fields: [
            { type: "textarea", name: "public_allowed", label: "What feels easy to share?", hint: "Light, public-safe signals that would not make you anxious if someone saw them." },
            { type: "textarea", name: "trusted_only", label: "What needs some trust first?", hint: "Things a known person, host, organiser or helper may understand after context is clear." },
            { type: "textarea", name: "match_only", label: "What only belongs inside mutual yes?", hint: "Desires, attraction, tenderness, deeper hope, body language, private invitations, or anything that needs reciprocal interest." },
            { type: "textarea", name: "private_only", label: "What is only for your own clarity?", hint: "Useful for self-understanding or private AI reflection, but not for anyone else yet." },
            { type: "textarea", name: "never_publish", label: "What must never become a public clue?", hint: "Anything that could expose identity, vulnerability, longing, trauma, health, location, family, money or intimate context." }
          ]
        },
        {
          title: "Ask First Moments",
          fields: [
            {
              type: "checkboxes",
              name: "ask_first_rules",
              label: "Ask me before",
              options: [
                ["sharing_identity", "Sharing my identity or contact path"],
                ["using_images", "Using my image, voice, avatar or likeness"],
                ["making_introduction", "Making a direct introduction"],
                ["summarising_sensitive", "Summarising something tender or sensitive"],
                ["moving_to_public", "Moving something trusted into public view"],
                ["agent_matching", "Using AI to compare or match me with someone"]
              ]
            },
            {
              type: "radio",
              name: "revocation_style",
              label: "If I get anxious or change my mind, the response should be",
              options: [
                ["immediate", "Pause immediately"],
                ["reviewed_with_helper", "Check with a trusted helper"],
                ["case_by_case", "Slow down case by case"],
                ["not_sure", "Not sure yet"]
              ]
            },
            { type: "textarea", name: "human_review", label: "Who helps you feel safer with sensitive choices?", hint: "A friend, elder, carer, therapist, organiser, host, community member, or simply yourself after more time." }
          ]
        }
      ]
    },
    connections: {
      title: "Loving Questions",
      schema: "grey_area_commons.connection_questions.v0",
      filename: "connection-questions.md",
      intro: "A non-explicit question path for loving intimate connection. The purpose is to reduce anxiety, make warmth easier, and protect mutual choice.",
      sections: [
        {
          title: "How Closeness Can Begin",
          fields: [
            {
              type: "singleCheck",
              name: "adult_lawful_confirmed",
              label: "I confirm this connection map is adult-only, lawful, voluntary and non-coercive.",
              markdownLabel: "Adult-only lawful confirmation"
            },
            {
              type: "checkboxes",
              name: "connection_modes",
              label: "What kinds of loving connection could feel nourishing?",
              options: [
                ["friendship", "Friendship with emotional honesty"],
                ["creative", "Creative or musical collaboration"],
                ["spiritual", "Spiritual, reflective or meaning-rich conversation"],
                ["romantic", "Romantic possibility"],
                ["intimacy_adjacent", "Intimacy-adjacent trust without public detail"],
                ["travel_distance", "Further-away connection or travel possibility"],
                ["community_hosting", "Events, circles or community hosting"]
              ]
            },
            {
              type: "select",
              name: "pace",
              label: "What pace makes loving connection easier?",
              options: [
                ["slow_questions_first", "Slow questions first"],
                ["friendly_then_deeper", "Friendly warmth, then deeper"],
                ["clear_invitation", "Clear invitation before depth"],
                ["body_and_words_both", "Body language and words both need to agree"],
                ["context_dependent", "Context dependent"],
                ["not_sure", "Not sure yet"]
              ]
            },
            { type: "textarea", name: "what_feels_safe", label: "What would make the first step feel less anxious?", hint: "A small message, shared activity, trusted intro, no pressure, direct words, humour, a public setting, a slow voice, time to reply, or permission to pause." }
          ]
        },
        {
          title: "Signals That Help",
          fields: [
            { type: "textarea", name: "green_flags", label: "What makes you relax and open?", hint: "Care, maturity, humour, patience, mutual curiosity, clean boundaries, consent, reliability, spiritual resonance, playfulness, shared values." },
            { type: "textarea", name: "yellow_flags", label: "What means slow down, but not necessarily stop?", hint: "Mixed signals, intensity, distance, life complexity, nervousness, unclear availability, cultural difference, or needing a better context." },
            { type: "textarea", name: "red_lines", label: "What is a clear stop?", hint: "Anything illegal, coercive, unsafe, manipulative, non-consensual, involving minors, privacy-breaking, cruel, dishonest or against your values." },
            { type: "textarea", name: "distance_diversity", label: "How can distance and difference be held gently?", hint: "Further away, very different backgrounds, online-first connection, travel, language, culture, disability, neurotype, relationship style, or spiritual worldview." }
          ]
        },
        {
          title: "Questions That Deepen Without Pushing",
          fields: [
            { type: "textarea", name: "deeper_questions", label: "What questions would help trust grow?", hint: "Ask about love, care, body, spirit, history, attachment, fear, joy or longing in ways that allow no, maybe, later, or not public." },
            { type: "textarea", name: "not_for_public", label: "What should never be turned into a public hint?", hint: "Anything that would make the person feel exposed, teased, hunted, reduced, pressured or misunderstood." }
          ]
        }
      ]
    },
    clinicalPathway: {
      title: "Memory, Love and Intimacy",
      schema: "grey_area_commons.memory_intimacy_pathway.v1",
      filename: "memory-intimacy-pathway.md",
      intro: "A softer grey-area path for adults navigating dementia onset, family history, diagnosis, care or recovery hope. It keeps love, tenderness, attraction, privacy and changing consent visible before anything is shared.",
      sections: [
        {
          title: "Heart Before Health",
          fields: [
            {
              type: "singleCheck",
              name: "adult_legal_consent_boundary",
              label: "I understand this draft is for adult, legal, consent-led connection and must not be used to pressure, bypass or expose anyone.",
              markdownLabel: "Adult and consent boundary"
            },
            {
              type: "singleCheck",
              name: "not_advice_confirmed",
              label: "I understand this is not medical, legal, sexual-consent, safeguarding, diagnosis, treatment or emergency advice.",
              markdownLabel: "Care-use boundary"
            },
            {
              type: "checkboxes",
              name: "pathway_stage",
              label: "Where does this memory-and-love question sit?",
              options: [
                ["family_history", "Family history or future-self planning"],
                ["early_questions", "Early questions or unusual changes"],
                ["onset_monitoring", "Onset monitoring and GP conversation prep"],
                ["after_diagnosis", "After diagnosis"],
                ["daily_care", "Daily care, routines and relationship changes"],
                ["reablement", "Recovery hope, reablement or confidence rebuilding"],
                ["grief_and_transition", "Grief, transition or changed intimacy"]
              ]
            },
            { type: "textarea", name: "less_anxious_love", label: "What would make loving connection feel less anxious right now?", hint: "Slower questions, clearer no, permission before touch, less family pressure, more privacy, more humour, more time, or a trusted person nearby." },
            { type: "textarea", name: "private_longing", label: "What longing, fear or tenderness needs careful words?", hint: "Missing closeness, fear of decline, attraction, loneliness, grief, body changes, future self, old promises, new boundaries, or not knowing how to ask." }
          ]
        },
        {
          title: "Intimacy That Can Stay Kind",
          fields: [
            { type: "textarea", name: "wanted_closeness", label: "What kinds of closeness still feel welcome, possible or worth asking about?", hint: "Companionship, flirting, romance, cuddling, holding hands, shared bed, dance, beauty, spiritual closeness, creative play, or simply being nearby." },
            { type: "textarea", name: "touch_and_body", label: "How should touch, body comfort and personal space be asked about gently?", hint: "Permission words, signs of comfort, signs of distress, private body boundaries, bathing or dressing dignity, affectionate touch, and how to pause without shame." },
            { type: "textarea", name: "identity_attraction", label: "What identity, sexuality or relationship context needs respect?", hint: "Orientation, gender, culture, faith, relationship style, grief, disability, trauma, marriage, chosen family, privacy, or late-life discovery." },
            { type: "textarea", name: "slow_or_stop", label: "What should slow down, pause or stop if confusion, pressure or distress appears?", hint: "Any touch, disclosure, money decision, travel, public post, private meeting, romantic step, AI suggestion, or family intervention that no longer feels freely chosen." }
          ]
        },
        {
          title: "Family History and Future Self",
          fields: [
            { type: "textarea", name: "family_history_context", label: "How does family history shape hope, fear or timing?", hint: "Patterns seen in parents, grandparents or siblings, what you want to do differently, what scares you, what gives hope, and what should not be assumed." },
            { type: "textarea", name: "future_wishes", label: "What would your future self want people to remember about love and dignity?", hint: "How to speak to you, touch you, include you, protect privacy, honour relationships, avoid infantilising you, and keep joy in the room." },
            { type: "textarea", name: "disclosure_choices", label: "Who knows about the risk, and who does not need to know yet?", hint: "Partner, dates, family, carers, GP, friends, workplace, community, online circles, AI tools, public noticeboards, or nobody yet." },
            { type: "textarea", name: "ordinary_joy", label: "What ordinary joys should stay in the picture?", hint: "Music, food, beauty, humour, touch with permission, nature, sexiness, prayer, stories, gardening, dancing, games, art, travel, work, rituals or rest." }
          ]
        },
        {
          title: "Consent Over Time",
          fields: [
            {
              type: "checkboxes",
              name: "consent_needs",
              label: "What consent checks would make intimacy and care safer?",
              options: [
                ["person_current_wishes", "Current wishes, asked gently and more than once"],
                ["decision_specific_capacity", "Capacity considered for this specific decision"],
                ["repeat_without_pressure", "Repeat, slow down or stop without pressure"],
                ["trusted_person_can_slow", "Trusted person can slow the process"],
                ["substitute_decision_maker", "Substitute decision-maker or EPOA check"],
                ["carer_separate_needs", "Carer support needs considered separately"],
                ["clinician_or_legal_review", "Clinician or legal review where needed"],
                ["privacy_review", "Privacy and data-sharing review"],
                ["never_publicly_ask", "Never ask or imply this publicly"]
              ]
            },
            {
              type: "select",
              name: "default_intimacy_visibility",
              label: "Default sharing layer for this intimacy file",
              options: [
                ["private", "Private"],
                ["trusted_only", "Trusted person only"],
                ["care_circle_only", "Care circle only"],
                ["clinical_team_only", "Clinician or support team only"],
                ["research_deidentified", "De-identified research only"],
                ["never_publish", "Never publish"]
              ]
            },
            { type: "textarea", name: "who_can_see", label: "Who may see which parts?", hint: "Separate self, partner, date, spouse, carer, family, clinician, counsellor, support worker, researcher, AI assistant and public layers." },
            { type: "textarea", name: "never_share", label: "What would feel like a betrayal if shared?", hint: "Diagnosis, risk, desire, identity, private health details, exact location, distress events, family conflict, money/legal details, or anything intimate that was offered in trust." }
          ]
        },
        {
          title: "Care Circle Without Taking Over",
          fields: [
            { type: "textarea", name: "support_people", label: "Who helps without taking over?", hint: "Partner, chosen family, adult children, friend, GP, counsellor, elder, carer, support worker, advocate, community host or nobody yet." },
            { type: "textarea", name: "human_review", label: "Who should be involved before any serious change?", hint: "A trusted adult, clinician, legal decision-maker, counsellor, safeguarding service, ethics committee or the person themselves after more time." },
            { type: "textarea", name: "what_helps", label: "What helps this person return to themselves?", hint: "Music, humour, familiar beauty, a walk, quiet, food, hydration, prayer, gentle touch with permission, routine, photo, voice, place, pet, or person." },
            { type: "textarea", name: "not_symptoms", label: "What should not be reduced to symptoms?", hint: "Desire, grief, flirtation, spirituality, playfulness, stubbornness, cultural expression, old wounds, sexuality, love, loneliness or a need for beauty." }
          ]
        },
        {
          title: "Human Guardrails",
          fields: [
            { type: "textarea", name: "urgent_boundaries", label: "What must always go to a human immediately?", hint: "Safety risk, coercion, abuse, exploitation, distress, medical concern, legal decision, financial pressure, emergency, or any intimacy that feels uncertain." },
            { type: "textarea", name: "ai_boundary", label: "What should AI only help word, sort or remember, never decide?", hint: "Consent, diagnosis, treatment, capacity, legal authority, romantic permission, sexual choices, public exposure, money, safety or who gets access." },
            { type: "textarea", name: "professional_questions", label: "What questions belong with a GP, clinician, counsellor, lawyer or safeguarding service?", hint: "Medical changes, diagnosis, medication, capacity, substitute decision-making, abuse risk, privacy law, care plans, sexuality and consent support, or research ethics." },
            { type: "textarea", name: "public_boundary", label: "What could be said publicly, if anything, without exposing diagnosis, longing or family vulnerability?", hint: "A general invitation, listening circle, arts night, care table or community question that does not reveal private health, relationship or intimacy context." }
          ]
        }
      ]
    },
    noticeboards: {
      title: "Public Bridge",
      schema: "grey_area_commons.noticeboard_bridge.v0",
      filename: "noticeboard-bridge.md",
      intro: "A public-safe bridge for invitations, events, circles and noticeboards. It must protect the tender private material that made the invitation possible.",
      sections: [
        {
          title: "Invitation Without Exposure",
          fields: [
            { type: "text", name: "notice_title", label: "What public title feels safe and inviting?", hint: "Keep it clear, warm and non-revealing." },
            {
              type: "checkboxes",
              name: "roles",
              label: "Who might hold the public layer?",
              options: [
                ["host", "Host"],
                ["organiser", "Organiser"],
                ["participant", "Participant"],
                ["visitor", "Visitor"],
                ["trusted_helper", "Trusted helper"],
                ["ai_assistant", "AI assistant"]
              ]
            },
            { type: "textarea", name: "public_invitation", label: "What can be invited publicly without pressure?", hint: "A gathering, circle, question, arts night, listening session, care table, travel idea, workshop or shared activity." },
            { type: "textarea", name: "public_sources", label: "What public sources or noticeboards already exist?", hint: "Existing public pages, events, groups, profile links, or local noticeboard references." }
          ]
        },
        {
          title: "Keep The Tender Parts Out",
          fields: [
            {
              type: "checkboxes",
              name: "exclude_by_default",
              label: "Do not leak",
              options: [
                ["private_aura", "Private aura.md material"],
                ["connection_intent", "Specific connection or attraction intent"],
                ["exact_location", "Exact private location"],
                ["contact_details", "Private contact details"],
                ["photos_without_approval", "Photos, voice or likeness without approval"],
                ["identity_clues", "Identity clues that reveal more than intended"],
                ["health_family_money", "Health, family, money or legal vulnerability"],
                ["sensitive_ai_inference", "Sensitive AI inference or ranking"]
              ]
            },
            { type: "textarea", name: "approval_path", label: "Who checks the public words before they appear?", hint: "A host, organiser, person named, trusted helper, carer, clinician, artist, committee, or community contact." },
            { type: "textarea", name: "open_questions", label: "What questions must be answered before public sharing?", hint: "Anything that would reduce anxiety, clarify consent, remove pressure, protect identity or make the invitation kinder." }
          ]
        }
      ]
    },
    higherMinds: {
      title: "Gentle AI Support",
      schema: "grey_area_commons.higher_minds_protocol.v0",
      filename: "higher-minds-protocol.md",
      intro: "Guidance for AI helpers and trusted higher-mind systems. Their job is to make loving connection calmer, clearer and more consensual, not to infer what people have not shared.",
      sections: [
        {
          title: "How AI Can Reduce Anxiety",
          fields: [
            {
              type: "checkboxes",
              name: "allowed_actions",
              label: "AI or a trusted helper may",
              options: [
                ["organise_questions", "Organise gentle questions"],
                ["summarise_private_for_self", "Summarise private notes for the person only"],
                ["suggest_next_questions", "Suggest a kinder next question"],
                ["detect_missing_permissions", "Notice missing consent or sharing layers"],
                ["draft_public_safe_copy", "Draft public-safe wording for review"],
                ["compare_with_permission", "Compare two records only with explicit permission"]
              ]
            },
            {
              type: "checkboxes",
              name: "always_ask_first",
              label: "AI must ask first before",
              options: [
                ["infer_identity", "Before inferring identity"],
                ["infer_attraction", "Before inferring attraction or compatibility"],
                ["share_between_people", "Before sharing between people"],
                ["store_memory", "Before storing memory"],
                ["publish_summary", "Before publishing any summary"],
                ["contact_person", "Before contacting or introducing anyone"]
              ]
            },
            { type: "textarea", name: "tone", label: "What tone would make AI feel less weird here?", hint: "Plain, warm, patient, adult, careful, curious, direct, non-salesy, Australian, spiritual, practical, playful, soft, or quiet." }
          ]
        },
        {
          title: "When AI Must Step Back",
          fields: [
            { type: "textarea", name: "refuse", label: "AI must pause when", hint: "Illegal, minor-related, coercive, exploitative, unsafe, non-consensual, privacy-breaking, manipulative, too intense, or too emotionally hot." },
            { type: "textarea", name: "escalate", label: "What belongs back with humans?", hint: "Name the kinds of judgement that need a person, not an automated answer." },
            { type: "textarea", name: "audit_trail", label: "What should be remembered as a permission note?", hint: "Dates, consent changes, no-go lines, who approved what, and what must be deleted or re-checked." }
          ]
        }
      ]
    }
  };

  const builderOrder = [
    "basicAura",
    "connections",
    "permissions",
    "higherMinds",
    "clinicalPathway",
    "noticeboards"
  ];

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function readStore() {
    try {
      return JSON.parse(sessionStorage.getItem(storageKey) || "{}");
    } catch (error) {
      return {};
    }
  }

  function writeStore(store) {
    sessionStorage.setItem(storageKey, JSON.stringify(store));
  }

  function lines(value) {
    return String(value || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  function yamlScalar(value) {
    return '"' + String(value || "TODO").replace(/"/g, '\\"') + '"';
  }

  function yamlList(items, indent = "  ") {
    if (!items.length) return indent + "- TODO";
    return items.map((item) => indent + "- " + yamlScalar(item)).join("\n");
  }

  function displayDate() {
    return new Date().toLocaleDateString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  function fieldOptions(field) {
    return (field.options || []).map(([value, label]) => ({ value, label }));
  }

  function fieldValue(field, data) {
    const value = data[field.name];
    if (field.type === "checkboxes") return Array.isArray(value) ? value : [];
    if (field.type === "singleCheck") return value === true || value === "true";
    return typeof value === "string" ? value : "";
  }

  function renderInput(field, data) {
    const value = fieldValue(field, data);
    if (field.type === "textarea") {
      return `<textarea id="${field.name}" name="${field.name}">${escapeHtml(value)}</textarea>`;
    }
    if (field.type === "select") {
      return `<select id="${field.name}" name="${field.name}">
        <option value="">Choose one</option>
        ${fieldOptions(field).map((option) => `<option value="${escapeHtml(option.value)}"${value === option.value ? " selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>`;
    }
    if (field.type === "radio") {
      return `<div class="option-grid">
        ${fieldOptions(field).map((option) => `<label><input type="radio" name="${field.name}" value="${escapeHtml(option.value)}"${value === option.value ? " checked" : ""}> ${escapeHtml(option.label)}</label>`).join("")}
      </div>`;
    }
    if (field.type === "checkboxes") {
      return `<div class="option-grid">
        ${fieldOptions(field).map((option) => `<label><input type="checkbox" name="${field.name}" value="${escapeHtml(option.value)}"${value.includes(option.value) ? " checked" : ""}> ${escapeHtml(option.label)}</label>`).join("")}
      </div>`;
    }
    if (field.type === "singleCheck") {
      return `<label class="single-check"><input type="checkbox" name="${field.name}" value="true"${value ? " checked" : ""}> <span>${escapeHtml(field.label)}</span></label>`;
    }
    return `<input id="${field.name}" name="${field.name}" type="text" value="${escapeHtml(value)}">`;
  }

  function renderField(field, data) {
    if (field.type === "singleCheck") {
      return `<div class="field">${renderInput(field, data)}</div>`;
    }
    return `<div class="field">
      <label for="${field.name}">${escapeHtml(field.label)}</label>
      ${field.hint ? `<p class="field-hint">${escapeHtml(field.hint)}</p>` : ""}
      ${renderInput(field, data)}
    </div>`;
  }

  function renderForm(builder, data) {
    return builder.sections.map((section) => `
      <fieldset>
        <legend>${escapeHtml(section.title)}</legend>
        ${section.fields.map((field) => renderField(field, data)).join("")}
      </fieldset>
    `).join("");
  }

  function getFormData(form, builder) {
    const data = {};
    builder.sections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.type === "checkboxes") {
          data[field.name] = [...form.querySelectorAll(`input[name="${field.name}"]:checked`)].map((input) => input.value);
        } else if (field.type === "singleCheck") {
          data[field.name] = Boolean(form.querySelector(`input[name="${field.name}"]:checked`));
        } else if (field.type === "radio") {
          const checked = form.querySelector(`input[name="${field.name}"]:checked`);
          data[field.name] = checked ? checked.value : "";
        } else {
          data[field.name] = form.elements[field.name] ? form.elements[field.name].value : "";
        }
      });
    });
    return data;
  }

  function optionLabels(field, values) {
    const map = new Map(fieldOptions(field).map((option) => [option.value, option.label]));
    return values.map((value) => map.get(value) || value);
  }

  function markdownForField(field, data) {
    const value = fieldValue(field, data);
    const label = field.markdownLabel || field.label;
    if (field.type === "checkboxes") {
      return [`### ${label}`, "", yamlList(optionLabels(field, value), ""), ""].join("\n");
    }
    if (field.type === "singleCheck") {
      return [`### ${label}`, "", value ? "Confirmed by user." : "Not confirmed.", ""].join("\n");
    }
    if (field.type === "select" || field.type === "radio") {
      const labels = optionLabels(field, value ? [value] : []);
      return [`### ${label}`, "", labels[0] || "No response provided.", ""].join("\n");
    }
    return [`### ${label}`, "", String(value || "No response provided.").trim(), ""].join("\n");
  }

  function buildMarkdown(builder, data) {
    const defaultVisibility = data.default_visibility || data.default_clinical_visibility || "self_managed";
    const content = [
      "---",
      `schema: ${builder.schema}`,
      "status: draft_for_self_review",
      "adult_only: true",
      "storage: local_browser_session_only",
      `generated: ${yamlScalar(displayDate())}`,
      `default_visibility: ${yamlScalar(defaultVisibility)}`,
      "not_legal_advice: true",
      "---",
      "",
      `# ${builder.title}`,
      "",
      builder.intro,
      "",
      "This Markdown file was generated locally in the browser. Treat it as a gentle question map and personal draft, not consent, publication approval or a promise.",
      ""
    ];

    builder.sections.forEach((section) => {
      content.push(`## ${section.title}`, "");
      section.fields.forEach((field) => content.push(markdownForField(field, data)));
    });

    content.push(
      "---",
      "",
      "## Standing boundaries",
      "",
      "- Adult-only and lawful.",
      "- No minors, coercion, exploitation, stalking, doxxing, pressure or privacy breaking.",
      "- Questions should reduce anxiety, not create pressure.",
      "- Private aura material must not be copied into public noticeboards.",
      "- AI helpers must ask before inferring, matching, storing or publishing.",
      "- The person may change or withdraw permission later.",
      ""
    );

    return content.join("\n");
  }

  function downloadText(filename, text) {
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function setStatus(node, message) {
    if (!node) return;
    node.textContent = message;
    window.clearTimeout(setStatus.timer);
    setStatus.timer = window.setTimeout(() => {
      node.textContent = "";
    }, 2800);
  }

  function copyText(text, statusNode, message) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => setStatus(statusNode, message),
        () => fallbackCopy(text, statusNode, message)
      );
      return;
    }
    fallbackCopy(text, statusNode, message);
  }

  function fallbackCopy(text, statusNode, message) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    setStatus(statusNode, message);
  }

  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector("#nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLAnchorElement)) return;
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  function initBuilderPage() {
    const root = document.querySelector("[data-builder]");
    if (!root) return;
    const builderId = root.getAttribute("data-builder");
    const builder = builders[builderId];
    const form = document.querySelector("[data-builder-form]");
    const output = document.querySelector("[data-markdown-output]");
    const status = document.querySelector("[data-status]");
    if (!builder || !form || !output) return;

    const store = readStore();
    const saved = store[builderId] || {};
    form.innerHTML = renderForm(builder, saved);

    function sync() {
      const nextStore = readStore();
      const data = getFormData(form, builder);
      nextStore[builderId] = data;
      nextStore.updatedAt = new Date().toISOString();
      writeStore(nextStore);
      output.value = buildMarkdown(builder, data);
    }

    output.value = buildMarkdown(builder, saved);
    form.addEventListener("input", sync);
    form.addEventListener("change", sync);
    form.addEventListener("submit", (event) => event.preventDefault());

    document.querySelector("[data-download-md]")?.addEventListener("click", () => {
      sync();
      downloadText(builder.filename, output.value);
      setStatus(status, `${builder.filename} is ready.`);
    });
    document.querySelector("[data-copy-md]")?.addEventListener("click", () => {
      sync();
      copyText(output.value, status, "Markdown copied.");
    });
    document.querySelector("[data-clear-builder]")?.addEventListener("click", () => {
      if (!window.confirm("Clear answers for this page from the browser session?")) return;
      const nextStore = readStore();
      delete nextStore[builderId];
      writeStore(nextStore);
      form.innerHTML = renderForm(builder, {});
      output.value = buildMarkdown(builder, {});
      setStatus(status, "This page is clear.");
    });
  }

  function buildPack(store) {
    const linesOut = [
      "---",
      "schema: grey_area_commons.pack.v0",
      "status: draft_for_self_review",
      "adult_only: true",
      "storage: local_browser_session_only",
      `generated: ${yamlScalar(displayDate())}`,
      "---",
      "",
      "# Grey Area Commons Markdown Pack",
      "",
      "This combined file gathers local browser drafts from the Grey Area Commons forms. It is for self-review and trusted human review only unless a separate permission says otherwise.",
      ""
    ];

    builderOrder.forEach((builderId) => {
      const builder = builders[builderId];
      linesOut.push("", "<!-- " + builder.filename + " -->", "");
      linesOut.push(buildMarkdown(builder, store[builderId] || {}));
    });

    return linesOut.join("\n");
  }

  function initExportPage() {
    const output = document.querySelector("[data-combined-output]");
    const list = document.querySelector("[data-export-list]");
    const status = document.querySelector("[data-status]");
    if (!output || !list) return;

    function render() {
      const store = readStore();
      output.value = buildPack(store);
      list.innerHTML = builderOrder.map((builderId) => {
        const builder = builders[builderId];
        const hasData = Boolean(store[builderId] && Object.keys(store[builderId]).length);
        const page = {
          basicAura: "aura-profile.html",
          permissions: "permissions.html",
          connections: "connections.html",
          clinicalPathway: "clinical-pathway.html",
          noticeboards: "noticeboards.html",
          higherMinds: "higher-minds.html"
        }[builderId];
        return `<article class="export-item">
          <strong>${escapeHtml(builder.title)}</strong>
          <span>${hasData ? "Draft answers found in this browser session." : "No answers yet. Blank draft included."}</span>
          <a href="${page}">Open builder</a>
        </article>`;
      }).join("");
    }

    render();

    document.querySelector("[data-download-pack]")?.addEventListener("click", () => {
      render();
      downloadText("grey-area-commons-pack.md", output.value);
      setStatus(status, "grey-area-commons-pack.md is ready.");
    });
    document.querySelector("[data-copy-pack]")?.addEventListener("click", () => {
      render();
      copyText(output.value, status, "Markdown pack copied.");
    });
    document.querySelector("[data-clear-all]")?.addEventListener("click", () => {
      if (!window.confirm("Clear all Grey Area Commons answers from this browser session?")) return;
      sessionStorage.removeItem(storageKey);
      render();
      setStatus(status, "All answers are clear.");
    });
  }

  initNav();
  initBuilderPage();
  initExportPage();
})();
